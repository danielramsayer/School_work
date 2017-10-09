import java.awt.*;
class AWTMenu extends Frame
{
MenuBar mbar;
Menu menu,submenu;
MenuItem m1,m2,m3,m4,m5;

    public AWTMenu()
    {

    // Set frame properties
    setTitle("AWT Menu"); // Set the title
    setSize(400,400); // Set size to the frame
    setLayout(new FlowLayout()); // Set the layout
    setVisible(true); // Make the frame visible
    setLocationRelativeTo(null);  // Center the frame

    // Create the menu bar
    mbar=new MenuBar();

    // Create the menu
    menu=new Menu("Menu");

    // Create the submenu
    submenu=new Menu("Sub Menu");

    // Create MenuItems
    m1=new MenuItem("Menu Item 1");
    m2=new MenuItem("Menu Item 2");
    m3=new MenuItem("Menu Item 3");

    m4=new MenuItem("Menu Item 4");
    m5=new MenuItem("Menu Item 5");

    // Attach menu items to menu
    menu.add(m1);
    menu.add(m2);
    menu.add(m3);

    // Attach menu items to submenu
    submenu.add(m4);
    submenu.add(m5);

    // Attach submenu to menu
    menu.add(submenu);

    // Attach menu to menu bar
    mbar.add(menu);

    // Set menu bar to the frame
    setMenuBar(mbar);
    }
    public static void main(String args[])
    {
    new AWTMenu();
    }
}
