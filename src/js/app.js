class Character {
    constructor(name, type, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    set name(value) {
        if(value.length >= 2 && value.length <= 10 && typeof value === 'string') {
            this._name = value;
            return;
        }
        throw new Error('Невалидное значение');
    }

    set type(value) {
        if([
            'Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'
        ].includes(value)) {
            this._type = value;
            return;
        }
        throw new Error('Невалидное значение');
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }
}

class Bowerman extends Character{
    constructor(name) {
        super(name, 'Bowerman');
        this.attack = 25;
        this.defence = 25;
    }
}

class Swordsman extends Character{
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }
}

class Magician extends Character{
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }
}

class Undead extends Character{
    constructor(name) {
        super(name, 'Undead');
        this.attack = 25;
        this.defence = 25;
    }
}

class Zombie extends Character{
    constructor(name) {
        super(name, 'Zombie');
        this.attack = 40;
        this.defence = 10;
    }
}

class Daemon extends Character{
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }
}