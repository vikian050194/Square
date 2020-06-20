class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;

        this.score = 0;
        this.x = 0;
        this.y = 0;
        this.actions = [];
        this.hp = 3;
    }
}

exports.modules = User;
