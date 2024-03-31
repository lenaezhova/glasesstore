import s from './QuickSearch.module.scss';
import { Button, Empty, Input } from 'antd';
import React, { LegacyRef, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import useCustomDebounce from '@/src/helpers/useCustomDebounce';
import { CloseOutlined, LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import {IconSearch} from '@/src/ui/IconSearch';

type Props = {};

const QuickSearch = (props: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any>();
  const scrollRef = useRef(0);
  const containerRef: LegacyRef<HTMLLIElement> = useRef(null);
  const route = useRouter();
  const [queryDebounce, isDebounceQuery] = useCustomDebounce(query, 500);

  useClickAway(containerRef, () => setIsOpen(false));

  const { mutateAsync: searchingTrigger, isLoading } =
    useMutation(() => { return new Promise(() => {}); });

  useEffect(() => {
    if (queryDebounce) {
      handleSearching(queryDebounce);
    }
  }, [queryDebounce]);

  useEffect(() => {
    const handleEnter = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (searchResults && searchResults?.products.length > 0) {
          const e = searchResults.products[0];
          route.push(
            ''
          );
          setIsOpen(false);
        }
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('keydown', handleEnter);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('keydown', handleEnter);
      }
    };
  }, [searchResults]);

  useEffect(() => {
    const handleEsc = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      if (scrollRef.current > 600) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setQuery('');
  };

  const handleSearching = async (query: string) => {
    try {
      const searchResults = await searchingTrigger();
      setSearchResults(searchResults);
    } catch (e) {}
  };

  return (
    <li ref={containerRef} className={s.quickSearch}>
      <Button
        type='link'
        onClick={() => handleOpen()}
        icon={<IconSearch className={s.svg} style={{
          fontSize: 28
        }}/>}
        className={s.quickSearchButton}
        area-label={'placeholder'}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={s.quickSearchOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={s.quickSearchInputWrapper}
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
            >
              {isDebounceQuery ? (
                <LoadingOutlined className={s.quickSearchIcon} />
              ) : (
                <IconSearch className={s.quickSearchIcon} />
              )}
              <Input
                type='text'
                placeholder={'placeholder'}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={s.quickSearchInput}
              />
              <Button
                onClick={() => setIsOpen(false)}
                className={s.quickCloseIcon}
                icon={<CloseOutlined />}
              />
            </motion.div>
            <AnimatePresence>
              {queryDebounce.length > 0 && isOpen && (
                <motion.ul
                  className={s.searchResults}
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {searchResults && searchResults.products.length > 0 && (
                    <>
                      {searchResults.products.map((e: any) => {
                        const pathUrl = '';

                        return (
                          <li key={e.id}>
                            <span className={s.searchResult}>
                              <span className={s.searchResultName}>
                                <IconSearch />
                                {e.title}
                              </span>
                              <Link
                                href={pathUrl}
                                onClick={() => setIsOpen(false)}
                              >
                                {'move'}
                              </Link>
                            </span>
                          </li>
                        );
                      })}
                    </>
                  )}
                  {searchResults && searchResults?.products.length === 0 && (
                    <li>
                      <Empty className='m-auto' />
                    </li>
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default QuickSearch;
