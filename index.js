import Piece from './piece.js';
class Square
    {
        constructor(color,index_id,piece)
        {
            this.color=color;
            this.index_id=index_id;
            this.piece=piece;
        }
         set_piece(piece)
        {
            this.piece=piece;

        }
        render()
        {
            let div=document.createElement('div');
            div.setAttribute("class","square");
            div.setAttribute("id",this.index_id);
            div.style.backgroundColor=this.color;

            if(this.piece)
            {
            
                div.appendChild(this.piece);
            }
        return div;
        }
    }

    class Board
        {
            constructor()
            {
                this.squares=[];
            }
            render()
            {
                const board=document.createElement('div');
                board.id="board";
                this.squares.forEach(square=>{
                    
                    
                    board.appendChild(square.render());
                }

                )
                return board;
            }
        }
        const board = new Board();
 
    for(let i=0;i<8;i++)
    {
        for(let j=0;j<8;j++)
        {
            if((i+j)%2==0)
            {
            let square=new Square("yellow",`${i*10+j}`,"");
            board.squares.push(square);
            }
            else
            {
                let square=new Square("brown",`${i*10+j}`,"");
                board.squares.push(square);
            }
        }
    }
    //representative board is a liner 1D array while the board we will have to work with will be a 2D array
    
    // I am thinking of representing black pieces with a lowercase letter while white with upper case as done 
    //by other chess engines

    //function for initial set up of piece and creating a 2D computational array of 1D representative array
    // the ids of squares are set up in such a way that it can be easily mapped onto the 2D grid

    let compBoard=[["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""]];

    function boardInit_convertTo2D()
    {
        //for(int i)
    board.squares[0].piece=new Piece("rook","black","./public/br.png",5).init();
     board.squares[7].piece=new Piece("rook","black","./public/br.png",5).init();

     board.squares[63].piece=new Piece("rook","white","./public/wr.png",5).init();
     board.squares[56].piece=new Piece("rook","white","./public/wr.png",5).init();
    
     compBoard[0][0]="r",compBoard[0][7]="r",
     compBoard[7][0]="R",compBoard[7][7]="R";


     board.squares[1].piece=new Piece("knight","black","./public/bn.png",3).init();
     board.squares[6].piece=new Piece("knight","black","./public/bn.png",3).init();

     board.squares[62].piece=new Piece("knight","white","./public/wn.png",3).init();
     board.squares[57].piece=new Piece("knight","white","./public/wn.png",3).init();
    
     compBoard[0][1]="n",compBoard[0][6]="n",
     compBoard[7][1]="N",compBoard[7][6]="N";

     board.squares[2].piece=new Piece("bishop","black","./public/bb.png",3).init();
     board.squares[5].piece=new Piece("bishop","black","./public/bb.png",3).init();

     board.squares[61].piece=new Piece("bishop","white","./public/wb.png",3).init();
     board.squares[58].piece=new Piece("bishop","white","./public/wb.png",3).init();
    
     compBoard[0][2]="b",compBoard[0][5]="b",
     compBoard[7][2]="B",compBoard[7][5]="B";
    
    board.squares[3].piece=new Piece("queen","black","./public/bq.png",8).init();
    board.squares[59].piece=new Piece("queen","white","./public/wq.png",8).init();

    compBoard[7][3]="Q";compBoard[0][3]="q";

    board.squares[4].piece=new Piece("king","black","./public/bk.png",0).init();
    board.squares[60].piece=new Piece("king","white","./public/wk.png",0).init();

    //for black pawns
    for(var i=8;i<=15;i++){
    board.squares[i].piece=new Piece("pawn","black","./public/bp.png",1).init();
    compBoard[1][i-8]="p";
    }
    for(var i=48;i<=55;i++){
        board.squares[i].piece=new Piece("pawn","white","./public/wp.png",1).init();
        compBoard[6][i-48]="P";
        }

    }
     boardInit_convertTo2D();
const boardElement = board.render();

document.body.appendChild(boardElement);
