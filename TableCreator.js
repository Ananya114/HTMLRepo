class Table{
    constructor(rows, cols){
        this.rows=rows;
        this.cols=cols;
        this.table=new Array(this.rows);
        for (let i=0;i<rows;i++){
            this.table[i]=new Array(this.cols)
        }
        for (let i=0;i<rows;i++){
            for (let j=0;j<cols;j++){
                this.table[i][j]=((i+1)*10)+j+1;
            }
        }
    }
    display(){
        for (let i=0;i<this.rows;i++){
            console.log(this.table[i]);
        }
    }
}
rows=3;
cols=3;
let table=new Table(rows, cols);
table.display();