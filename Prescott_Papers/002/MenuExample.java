import java.awt.*;

class MenuExample{
  First(){
    Frame f=new Frame();
    Button TS=new Button("Trade Shares");
    TS.setBounds(30,50,80,30);
    TS.setSize(120,40);
    Button PR=new Button("Portfolio Report");
    PR.setBounds(160,50,80,30);
    PR.setSize(120,40);
    Button S=new Button("Save");
    S.setBounds(290,50,80,30);
    S.setSize(120,40);
    Button E=new Button("Exit");
    E.setBounds(420,50,80,30);
    E.setSize(120,40);
    f.add(E);
    f.add(S);
    f.add(TS);
    f.add(PR);
    f.setSize(600,400);
    f.setLayout(null);
    f.setVisible(true);
  }

  public static void main(String args[]){
    First f=new First();
  }
  //public static void exit(int status){

  //}
}
