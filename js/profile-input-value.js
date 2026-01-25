(() => {
    const userData = {
        // personal details
        name: 'Chiemeka Evans',
        occupation: 'CTO',
        company_name: 'EduVista',
        phone: '07018242107',
        // Address Details
        address: '14 StellaMaris, Uratta',
        city: 'Aba',
        state: 'Abia State',
        postcode: '450251',
        // Social Links Details
        linkedin: 'www.linkedin.com',
        facebook: 'www.facebook.com',
        x: 'www.x.com',
        instagram: 'www.instagram.com'
    };

    for (let key in userData) {
        let userInput = document.getElementById(key); //get the input element
         userInput.value = userData[key]; //Each input value is equal to userData item's value
      }
})();