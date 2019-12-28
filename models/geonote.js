const db = require("../config/database");

module.exports = class Geonote {
    constructor(nid,userid,txt,coord){
        this.nid = nid
        this.userid = userid 
        this.txt = txt 
        this.coord = coord
    }
    save(){

    }

    static deleteByid(id){

    }

    static fetchAll(){
        return db.query('SELECT * FROM geonotes')
    }

    static findById(id){
        
    }
}

