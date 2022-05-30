import axios from 'axios';

interface ICep{
    cep: number;
}

class GetCep {

    public async execute(cep: ICep){
          
        const get = await axios.get(`viacep.com.br/ws/${cep}/json/`)
        .then((response)=>{
            return response.data;
        }) 
        .catch((error) => {
            console.log(error);
        })
        console.log(cep)

        return get;

    }

}

export default GetCep;