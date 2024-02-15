import {format} from 'date-fns';

const convertToBrazilFormatDate = (statement) =>{    
    Object.entries(statement).map(([key, value]) => {
        if (typeof value === 'object' && value.length > 0){
            for (let transaction of value){
               transaction.transaction_date = format(new Date(transaction.transaction_date), 'dd/MM/yyyy HH:mm:ss');
            }        
        } 
    });
    
    return statement;   
}; 

export default convertToBrazilFormatDate;