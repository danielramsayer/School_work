import java.io.* ;

public class experiments {

    public static void main(String [] args) throws Exception {

        RandomAccessFile rand = new RandomAccessFile("/Users/danielramsayer/github/School_work/Prescott_Papers/006/ tweedle-dum.txt", "r");

        byte buffer [] = new byte [100] ;

        rand.seek(70);

        int numBytesRead = rand.read(buffer) ;

        System.out.println(new String(buffer)) ;
    }
}
