import java.net.*;
import java.io.*;

public class client {
    public static void main(String[] args) {
        try {Socket sk = new Socket("127.0.0.1", 2000);
             BufferedReader sin = new BufferedReader(new InputStreamReader(sk.getInputStream()));
             PrintStream sout = new PrintStream(sk.getOutputStream());
             BufferedReader stdin = new BufferedReader(new InputStreamReader(System.in));
      

            String s;
            while (true) {
                System.out.print("Client: ");
                s = stdin.readLine();
                if (s == null || s.equalsIgnoreCase("END")) {
                    sout.println("END");
                    break;
                }
                sout.println(s);

                s = sin.readLine();
                System.out.println("Server: " + s);

               
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
