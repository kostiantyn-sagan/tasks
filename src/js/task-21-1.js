export const personFirst = {
    name: 'Oliver',
    verified: true
};

export const personSecond = {
    name: 'Alex'
};

export function isCustomerVerified({verified}) {
    return new Promise((resolve, reject) => {
        if (verified)  resolve(verified);
         reject('Customer is not verified');
    })
};

