module.exports = class UserDto {
    email;
    id;
    name;
    surname;
    patronymic;
    isActivated;
    gender;
    role;

    constructor(model) {
        this.email = model.email;
        this.name = model.name;
        this.surname = model.surname;
        this.patronymic = model.patronymic;
        this.gender = model.gender;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.role = model.role;
    }
}