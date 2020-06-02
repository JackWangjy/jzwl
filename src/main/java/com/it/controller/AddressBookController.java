package com.it.controller;

import com.it.domian.AddressBook;
import com.it.domian.VipAccount;
import com.it.service.JluzhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class AddressBookController {

    @Autowired
    private JluzhService jluzhService;

    @RequestMapping("/queryAb/{id}")
    public String queryAb(@PathVariable("id") Integer id, Model model){
        List<AddressBook> addressBooks = jluzhService.getMyAddressBook(id);
        model.addAttribute("addressBooks",addressBooks);
//        for (AddressBook a : addressBooks){
//            System.out.println(a);
//        }
        return "myaddressbook";
    }

    @ResponseBody
    @RequestMapping("/getAb")
    public List<AddressBook> queryAb2(int id, HttpSession session,Model model){
        List<AddressBook> addressBooks = jluzhService.getMyAddressBook(id);
//        for (AddressBook addressBook:addressBooks){
//            System.out.println(addressBook);
//        }
        session.setAttribute("addressBooks",addressBooks);
        return addressBooks;
    }

    @ResponseBody
    @RequestMapping("/deleteAd")
    public int deleteAd(Integer id){
        int r = 1;
        jluzhService.deleteaddress(id);
        return r;
    }

    @ResponseBody
    @RequestMapping("/addAb")
    public int addAb(AddressBook addressBook, String sad1,String sad2,String sad3,HttpSession session){
        String address = sad1+"-"+sad2+"-"+sad3;
        addressBook.setAddress(address);
        VipAccount account = (VipAccount)session.getAttribute("account");
        int i = jluzhService.totalAddress(account.getId());
        System.out.println(i);
        int result;
        if(i<5){
            addressBook.setVipAccount(account);
            jluzhService.insertAddressBook(addressBook);
            result = 1;
            return result;
        }else{
            result = 0;
            return result;
        }
    }


    @ResponseBody
    @RequestMapping("/updateAb")
    public Integer updateAb(AddressBook addressBook){
        Integer rs;
        if(addressBook!=null){
            jluzhService.updateAddress(addressBook);
            rs = 1;
            return rs;
        }else {
            rs = 0;
            return rs;
        }
    }

}
