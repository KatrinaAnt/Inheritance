export default class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    static types = [
        'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'
    ];

    set name(value) {
        if(value.length <= 2 || value.length >= 10 || typeof value !== 'string') {
            throw new Error('Невалидное значение');
        }
        this._name = value;
    }

    set type(value) {
        if(!Character.types.includes(value)) {
            throw new Error('Невалидное значение');
        }
        this._type = value;
    }
}