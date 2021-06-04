export const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex',
        
    }
];

export const countries = [
    {
        id: 'A1',
        country: 'usa'
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

export function getCustomers(customers, countries) {
    const verifiedCustomers = customers.filter(customer => customer.verified);

    return new Promise((resolve, reject) => {
    const customers = verifiedCustomers.reduce((customers, verifiedCustomer) => {
        const infoAboutCountry = countries.find(country => country.id === verifiedCustomer.id );
            
        if (infoAboutCountry) return [...customers, {...verifiedCustomer, ...infoAboutCountry}]

        return `We don't have information about country for this customer ${verifiedCustomer.name}` ;
        }, []);
        
    if (Array.isArray(customers)) resolve(customers);

    reject(customers);
})
};


