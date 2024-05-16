
export default class Piece 
    {
        constructor(type,color,img,points)
        {
            this.type=type;
            this.color=color;
            this.img=img;
            this.points=points;
        }
        init()
        {
            const piece=document.createElement('div');
            const img=document.createElement('img');
            img.src=this.img;
            img.className="imgPiece";
            piece.appendChild(img);
            return piece;

        }

    }


 
export const pieces={
     Wpawn:new Piece("pawn","white","./public/wp.png",1).init(),
     Wbishop:new Piece("bishop","white","./public/wb.png",3).init(),
     Wknight:new Piece("knight","white","./public/wn.png",3).init(),
     Wrook:new Piece("rook","white","./public/wr.png",5).init(),
     Wqueen:new Piece("queen","white","./public/wq.png",8).init(),
     Wking:new Piece("king","white","./public/wk.png",0).init(),

     Bpawn:new Piece("pawn","black","./public/bp.png",1).init(),
     Bbishop:new Piece("bishop","black","./public/bb.png",3).init(),
     Bknight:new Piece("knight","black","./public/bn.png",3).init(),
     Brook:new Piece("rook","black","./public/br.png",5).init(),
     Bqueen:new Piece("queen","black","./public/bq.png",8).init(),
     Bking:new Piece("king","black","./public/bk.png",0).init(),

}