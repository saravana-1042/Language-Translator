# Language-Translator

# Overview

This project demonstrates the creation of a language translator web application using HTML, CSS, JavaScript, and Azure services.
The application allows users to input text in one language and obtain a translation into another language.
It leverages Azure services to perform the actual translation.

# Technologies Used

HTML: For the structure of the web page.
CSS: For styling and layout.
JavaScript: For client-side logic and interactions.
Azure Services: To provide translation capabilities.
Azure Virtual Machine (VM): To host the server-side code.
Domain Name System (DNS): To associate a domain name with the VM's IP address.

# Prerequisites

Before setting up the project, ensure you have the following:
An Azure account: You'll need an Azure account to create and manage Azure services.
An Azure Virtual Machine: Set up an Azure VM to host the server-side code for your application.
A registered domain: Register a domain name transapp.southindia.cloudapp.azure.com with a domain registrar and configure the DNS settings to point to your Azure VM's IP address.

# Setup Instructions

# Front-end (HTML, CSS, JavaScript)

Place your HTML, CSS, and JavaScript files in a directory on a web server or hosting service. You can use any web hosting service for this purpose.
Ensure you have a form for users to input text to be translated and a display area for the translated text.
In your JavaScript code, use the Azure Translator API to send translation requests to your Azure server.

# Back-end (Azure VM)

Set up an Azure Virtual Machine (VM) with your preferred operating system (e.g., Ubuntu, Windows).
Install a web server (e.g., IIS) and configure it to serve the back-end code.

# DNS Configuration

Configure your DNS settings for your registered domain name to point to the IP address of your Azure VM.
Set up SSL certificates for your domain to enable HTTPS for secure communication.

# Usage

Visit your website using your registered domain (transapp.southindia.cloudapp.azure.com).
Enter text in the source language and select the target language.
Click the translate button to send the translation request to your Azure server.
Display the translation result on the web page.


#Demo Images

![image](https://github.com/saravana-1042/Language-Translator/assets/145033609/bd6bf26b-430f-4497-a245-2654f63a0c85)

![image](https://github.com/saravana-1042/Language-Translator/assets/145033609/5144920c-880b-495c-9fda-5ff19b349e5a)



