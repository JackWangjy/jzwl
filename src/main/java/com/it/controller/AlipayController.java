package com.it.controller;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.it.config.AlipayConfig;
import com.it.domian.Order;
import com.it.service.JluzhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

@Controller
public class AlipayController {

    @Autowired
    private JluzhService jluzhService;

    @RequestMapping("/paymoney")
    @ResponseBody
    public String pay(String id,String sendername,double money){

        //获得初始化的AlipayClient
        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);

        //设置请求参数
        AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
        alipayRequest.setReturnUrl(AlipayConfig.return_url);
        alipayRequest.setNotifyUrl(AlipayConfig.notify_url);

        alipayRequest.setBizContent("{\"out_trade_no\":\""+ id +"\","
                + "\"total_amount\":\""+ money +"\","
                + "\"subject\":\""+ sendername +"\","
                + "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");



//        AlipayVo alipayvo=new AlipayVo();
//        alipayvo.setId(id);
//        alipayvo.setName(name);
//        DecimalFormat df=new DecimalFormat("#.00");//定义浮点数格式
//        String moneytoo=df.format(money);//格式一下
//        alipayvo.setMoney(Double.parseDouble(moneytoo));
//
//
//        //将保存的参数对象转化成String类型的json字符串
//        String json = JSON.toJSONString(alipayvo);
//
//        //获得初始化的AlipayClient
//        AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl,AlipayConfig.app_id,AlipayConfig.merchant_private_key, "json",AlipayConfig.charset,AlipayConfig.alipay_public_key,AlipayConfig.sign_type);
//        // 设置请求参数
//        AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
//        alipayRequest.setReturnUrl(AlipayConfig.return_url);
//        alipayRequest.setNotifyUrl(AlipayConfig.notify_url);
////        alipayRequest.setBizContent(json);
//        alipayRequest.setBizContent("{\"id\":\"" + id + "\"," + "\"name\":\"" + name
//                + "\"," + "\"money\":\"" + money + "\"}");
        //执行请求
        String result = null;
        try {
            result = alipayClient.pageExecute(alipayRequest).getBody();
        } catch (AlipayApiException e) {
            e.printStackTrace();
        }

        return result; //这里生成一个表单，会自动提交c

    }

    /**
     * 支付宝服务器异步通知
     * @param request
     * @param out_trade_no
     * @param trade_no
     * @param trade_status
     * @return
     * @throws AlipayApiException
     */
    @RequestMapping(value = "/notify_url",method = RequestMethod.POST)
    public String alipayNotify(HttpServletRequest request, String out_trade_no, String trade_no, String trade_status) throws AlipayApiException {
        Map<String, String> params = getParamsMap(request);
        // 验证签名
        boolean signVerified = AlipaySignature.rsaCheckV1(params, AlipayConfig.alipay_public_key, AlipayConfig.charset, AlipayConfig.sign_type);

        if (signVerified) {
            //处理你的业务逻辑，更新订单状态等

            return ("index");
        } else {
            return ("index");
        }
    }

    /**
     * 支付宝服务器同步通知
     * @param request
     * @param out_trade_no
     * @param trade_no 支付宝交易凭证号
     * @param total_amount 交易状态
     * @return
     * @throws AlipayApiException
     */
    @RequestMapping(value = "/return_url",method = RequestMethod.GET)
    public String alipayReturn(HttpServletRequest request,HttpSession session, String out_trade_no, String trade_no, String total_amount) throws AlipayApiException {
        Map<String, String> params = getParamsMap(request);
        // 验证签名
        boolean signVerified = AlipaySignature.rsaCheckV1(params, AlipayConfig.alipay_public_key, AlipayConfig.charset, AlipayConfig.sign_type);

        if (signVerified) {
            //处理业务逻辑，更新订单状态等
            Order order = (Order)session.getAttribute("order");
            jluzhService.placeOrder(order);
            return "result/success";
        } else {
            return ("result/false");
        }
    }

    //获取支付宝POST过来反馈信息
    private Map<String, String> getParamsMap(HttpServletRequest request) {
        Map<String,String> params = new HashMap<>();
        Map requestParams = request.getParameterMap();
        for (Iterator iter = requestParams.keySet().iterator(); iter.hasNext();) {
            String name = (String) iter.next();
            String[] values = (String[]) requestParams.get(name);
            String valueStr = "";
            for (int i = 0; i < values.length; i++) {
                valueStr = (i == values.length - 1) ? valueStr + values[i]
                        : valueStr + values[i] + ",";
            }
            //乱码解决，这段代码在出现乱码时使用
            try {
                valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8");
                params.put(name, valueStr);
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
        }
        return params;
    }

}
