package com.it.config;

import org.springframework.context.annotation.Configuration;

import java.io.FileWriter;
import java.io.IOException;

@Configuration
public class AlipayConfig {

    // 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
    public static String app_id = "2016092900624660";

    // 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDwxUKXtDISWeFCUv5S/wZgDiBKfOkFrkiW2QZO5TfNh1l4zoMoVTLVs2D1SAJ1O0I8yvujvkm7hOq+fR6I+skPQPSKPu21goD8JFBJc75L+9ElzTl4yBwQtsXw2a/yc+m7ypSm2/d80XO3iys3aTeZadFd840okBq1TTAfOkH3uCStmUy8MoSMR0NTueAm2q9/Ff+Ao+ZhdR5apbl+zMpixt8UmyODeuwWNERvU0C36MIQ4TiodwkRNM32Q14K0iDpush3IqZR7LK4sc3OTRtfrCL6O1WRUDwHW6k2PI5kkQUS91kPtrLLLVvwUkZwwVny5Lwt40B1tujhPVsfqofrAgMBAAECggEAS6H7oEIXtJINY9NEVvgLnaLyW9PPM1yjKtez1pbEp8iLv5pHsyTIWj8GByb+tqrNzOEKmU5ORRykzP/q1qbJAASsjLzl2S3MrOgPXHOCZMYO1iwYkKtzvYBcv6LyVVw6ISaq+ZuBq/Dzw8Vw5vAjagrGnRfD0OkrqqY7pqObU2AmERGkyBh3ZEuZquKhoKgvNS9zW8FlgkwKXyl6W9iT2S2oXuROVNu2eAlX7ik+HKMtCXoBpGyR+FOf0Q6IZZSknlrs64uPz44RUdhO3TUBjHKyIP2xFp5wxFrr0MlJlsPLpBVqMGLPM++rdeYav7E1v/NpcX1jZa/7vF3UTduCwQKBgQD6rWheuSsKcO+oeKlmX0aB6Q/l27OBIAbbZXmcLI9Oht9yJQ42EHziOD37DhCHmCIFe3Cxs7lkzrEaRT9y6ce0s1Xoc8JGfWKKPY0pCZgxTtt33AMeYZYRIn7E/RctjacaU/hJC4EWWvqNRCg6MC5TTRj1b2XFexOf3DaHRA/loQKBgQD14gCiSSWzUscV3pRq3c10nD7fLBYFSSvALQt3Um1v5kftTuTXJrDAMU3RNsSaiRKU+4Soc10z/DY62g8at23zQccbvsdhuApD8ExXAXdDtEVDuYKwIC1GGrkNNnVxWkKca1heGTZTMvhO2INSxhoqFeIkXmHDnHM+UjdgxodqCwKBgQD1Zh7fZAwzi33CAmVrd2fRs3PBxMNEbDLqQru7XI/qAvTpjEcOPDPVTdO3WvxpkU/05/PZsqSSgBk2K4ZCm4PKbSlzhycv1H1L8ZeoDeF0m8sT2kkfS88Z9Rf/BfjTunFUv9E2yNFVLjlLY+axmAsxty7wzl3l5me+vliPMN0TIQKBgFOe2LhYSAoETNCTMcZmSEkwGfGr/JEvoUFqEEw0LCOyHSQHgKvq7JFwMxbDmXk0xK0GHMds9HWJgKfjIN/lIe9on15AM254OIWCY3Pze6v60tOFc3ySdNMyo1xq+OXj3GN13keiK2eAHhIyb/bmiF9nsdDMiFMOEeNP8qVm3wahAoGAN+Zej8ocwfKfsnxymrVYi+daBfLAGHJX3tXFFqODNQficdjW+y0tNrCS/kwsSQu6VKm0WWam7iYmjW01WCPdiWauOO1SE0xtI8ThYUYY1BRxCz4MBqFs0dSx9uwZlrEG26XW+bXlngi1AeJjDw1sFa8T1A0eD/MXT8NliVLFkmY=";

    // 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhQlwaajSQJCAs184XpcYdnX4svcAlejfIxwnq9N+wGL+q8NfWOsA02Q5Tsv++Li4UCVuZc/hq/w6YfBJyyhZotFsf7wSa41lP9c4MJ4UIdLiCwRTxktKAzLkXj4aQ1LBAQ8v+qwyMcms9ASXHSqg+KqRii9iBE7HeQ1jkyfl3iBlacRrKV/zZkJ/BcIEPWhubUm/KI4HqX/LaSxiMWdkgddIjIVRLLKZvIkXjCIL8Zuwj8LRvUK67o5iDMY8CDGbJhcvuXm0I0Mi9ODue7RgpsaqJYH5B2YD5kt2erchk7dc2Ll82cT6oQu4YCKyKZxJ6g0hN1bKAZVy9hYU7aamgQIDAQAB";

    // 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String notify_url = "http://localhost:8888/notify_url";

    // 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
    public static String return_url = "http://localhost:8888/return_url";

    // 签名方式
    public static String sign_type = "RSA2";

    // 字符编码格式
    public static String charset = "utf-8";

    // 支付宝网关
    public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";

    // 支付宝网关
    public static String log_path = "D:\44";

    /**
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
