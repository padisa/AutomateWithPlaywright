// This file will be used to store data related to xpaths from the page

module.exports ={
    home_page_title: '//title[contains(text(),"OLX.ba")]',
    home_page_olx_logo: '//div[1]/a/img[@alt="olx-logo"]',
    home_page_list_elements: 
    {
        Initial: '//a[contains(text(),"Početna")]',
        Categories: '//a[contains(text(),"Kategorije")]',
        Shops: '//div[3]//a[contains(text(),"Shopovi")]',
        Marketing: '//div[3]//a[contains(text(),"Marketing")]',
        Blog: '//a[contains(text(),"Blog")]',
        Adverties: '//button[contains(text(),"Objavi oglas")]',
        Links: '//button[contains(text(),"Ostali linkovi")]'
    },

    home_page_search_bar: '//input[@placeholder="Pretraga"]',
    categories_menu_cars: '//a[contains(text(),"Automobili")]',
    categories_menu_manufacturer: '//div[contains(text(),"Proizvođač")]',
    categories_menu_manufacturer_type: '//option[contains(text(),"Alfa Romeo")]',
    categories_menu_price: '//div[contains(text(),"Cijena")]',
    categories_menu_price_fist_value: '//div[3]//input[@placeholder="od"]',
    categories_menu_price_second_value: '//div[3]//input[@placeholder="do"]',
    categories_menu_price_refresh: '//div[1]/div[1]/div/div[2]/div[3]/div[2]/button',
    home_page_dialog: '//div[@role="dialog"]',
    home_page_agree_button: '//span[contains(text(),"SLAŽEM SE")]',
}