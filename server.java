import java.net.*;
import java.io.*;

public class server {
    public static void main(String[] args) {
        System.out.println("Server is waiting for client request...");
        try{ ServerSocket ss = new ServerSocket(2000);
             Socket sk = ss.accept();
             BufferedReader cin = new BufferedReader(new InputStreamReader(sk.getInputStream()));
             PrintStream cout = new PrintStream(sk.getOutputStream());
             BufferedReader stdin = new BufferedReader(new InputStreamReader(System.in));

            System.out.println("Client connected.");
            
            String s;
            while (true) {
                
                    s = cin.readLine();
                    if (s == null || s.equalsIgnoreCase("END")) {
                        
                        break;
                    }
                    System.out.println("Client: " + s);
                    System.out.print("Server: ");
                    s = stdin.readLine();
                    cout.println(s);
                
                }
            } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
