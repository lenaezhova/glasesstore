const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
class UserService {
    async registration(email, password, name, surname){
        const candidate = await UserModel.findOne({email})
        const activationLink = uuid.v4();
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        if (candidate){
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({email, password: hashPassword, name, surname, activationLink})
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto
        }
    }

    async updateUserInformation(email, name, surname, patronymic, gender) {
        const user  = await UserModel.findOne({email})
        user.email = email;
        user.name = name;
        user.surname = surname;
        user.patronymic = patronymic;
        user.gender = gender;
        await user.save();
        return user;
    }
    async updatePassword(email, oldPassword, newPassword){
        const user = await UserModel.findOne({email})
        const isPassEquals = await bcrypt.compare(oldPassword, user.password);
        if (isPassEquals) {
            user.password = await bcrypt.hash(newPassword, 3);
            await user.save();
        } else {
            throw ApiError.BadRequest(`Пароли не совпадают`)
        }
    }

    async activate(activationLink){
        const user  = await UserModel.findOne({activationLink})
        if (!user){
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }
        user.isActivated = true;
        await user.save();
    }
    async login(email, password){
        const user  = await UserModel.findOne({email})
        if (!user){
            throw ApiError.BadRequest('Пользователь не был найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals){
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            userId: userDto.id
        }
    }

    async loginAdmin(email, password){
        const user  = await UserModel.findOne({email})
        if (!user){
            throw ApiError.BadRequest('Пользователь не был найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals){
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user);

        if (userDto.role !== 'admin') {
            throw ApiError.NotEnoughRights();
        }

        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            userId: userDto.id
        }
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }
    async refresh(refreshToken){
        if (!refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            userId: userDto.id
        }
    }

    async getUser(id) {
        const user = await UserModel.findById(id);
        return user;
    }

    async getAllUsers(){
        const users = await UserModel.find();
        return users;
    }

}
module.exports = new UserService();