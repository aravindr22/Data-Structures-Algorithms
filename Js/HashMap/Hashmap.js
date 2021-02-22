//---------------------------------HashMap Time complexity--------------------------------------
//Insert - O(1)
//Deletion - O(1)
//Access - O(1)

class HashTable{
    constructor(size = 5){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let prime_Number = 31;
        for(let i=0;i < Math.min(key.length,100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * prime_Number + value) % this.keyMap.length; 
        }
        return total;
    }

    set(key, value){
        let index = this._hash(key); 
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(key === this.keyMap[index][i][0]){
                    return this.keyMap[index][i]; 
                }
            }
        } 
        return undefined;
    }

    keys(){
        let keysArr = [];
        for(let i = 0;i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    
    values(){
        let valuesArr = [];
        for(let i = 0;i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17 );
ht.set("one", "1");
ht.set("two", "2");
ht.set("three", "3");
ht.set("four", "4");
ht.set("five", "5");
ht.set("six", "6");
ht.set("seven", "7");
ht.set("eight", "6");
ht.set("nine", "6");
console.log(ht.keyMap)
console.log(ht.values())
console.log(ht.keys())