---
slug: jasper-localization-from-property
title: "Jasper Localization From Property File:Encoding Issue"
date: 2016-01-03T14:50:00.002Z
authors: [giri]
tags: [experience, jasperreports]
---

Recently In a Project I used Jasper to generate PDF forms.While doing this task I encountered a problem with Localization of Jasper Fields from Property Files.  

<!-- truncate -->

Normally we include below attribute in JRXML header to point to localization files.  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjywD5LNreT-IdbNud0G5vIu_MWDY-ehiJnkeNszhhLP4Gys_HEmw4j2IGOMQeLDtXg4mX56sb7SJQFT0xXLacTBm9LjPyIQP-fZ_Rr7z1BAFJQRLlvyBilM_wVWZ32TlNOaFrj51ShI2OZ/w658-h81/Jasper_Localization_Issue1.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjywD5LNreT-IdbNud0G5vIu_MWDY-ehiJnkeNszhhLP4Gys_HEmw4j2IGOMQeLDtXg4mX56sb7SJQFT0xXLacTBm9LjPyIQP-fZ_Rr7z1BAFJQRLlvyBilM_wVWZ32TlNOaFrj51ShI2OZ/s1600/Jasper_Localization_Issue1.JPG)

Localization files will be in same folder where JRXML is placed and localization files will be in below format.  

  * jasperreports_en.properties
  * jasperreports_th.properties
  * etc

And each file will have key value pair like

delivery.date=Delivery Date

delivery.print.date=Print Date

and it will be used in JRXML in below format

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1CoYMknPthuHbuyBUpoGKKS2WioiV17v9WY6The8aNt6E3JltZuvPOmo-xt-KK6xU-B8ncWGyWS3WQ4RwWxdOquDtEhfm15hyphenhyphenVPehBAPpuwN00qLTXdLdw2oMGSevq02geVW1FhoYjnFy/s640/Jasper_Localization_Issue2.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1CoYMknPthuHbuyBUpoGKKS2WioiV17v9WY6The8aNt6E3JltZuvPOmo-xt-KK6xU-B8ncWGyWS3WQ4RwWxdOquDtEhfm15hyphenhyphenVPehBAPpuwN00qLTXdLdw2oMGSevq02geVW1FhoYjnFy/s1600/Jasper_Localization_Issue2.JPG)

and Localization is passed to JRXML in below format

     parameterMap.put(JRParameter.REPORT_LOCALE, new Locale("th"));

**_Encoding Issue:_**  

When I generated the PDF for Thai language the output was a bunch of junk values.  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUqjmk4hyuccxxt4LQYbJtmWvYmixvrFGQtSZk3ezoATchyphenhyphenmdZvPBFkoF46FUxZcSX8cKas-sm5hfPeeuhK1hypHqmBcZIT1ri8D19qfACwMCKnQsG-TRoTn6cYbZ404J7qPaWviGIC6df/s320/Jasper_Localization_Thai_Issue3JPG.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUqjmk4hyuccxxt4LQYbJtmWvYmixvrFGQtSZk3ezoATchyphenhyphenmdZvPBFkoF46FUxZcSX8cKas-sm5hfPeeuhK1hypHqmBcZIT1ri8D19qfACwMCKnQsG-TRoTn6cYbZ404J7qPaWviGIC6df/s1600/Jasper_Localization_Thai_Issue3JPG.JPG)

The problem is resource bundle reads the property files in ASCII encoding even though property file is encoded in UTF-8

**_Soultion:_**  

Remove the resourcebundle attribute from JRXML and configure it in Java class with UTF-8 Encoding.  

     try 
     {
      InputStream input = this.getClass().getClassLoader().getResourceAsStream("jasperreport_"+locale.getLanguage()+ ".properties");
      Reader reader = new InputStreamReader(input, "UTF-8");
      ResourceBundle resourceBundle = new PropertyResourceBundle(reader);
      parameters.put(JRParameter.REPORT_RESOURCE_BUNDLE,resourceBundle);
     } 
     catch (IOException  e1) 
     {
      LOG.error("Error locating localize file ",e1);
     }
