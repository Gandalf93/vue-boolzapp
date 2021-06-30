// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


var app = new Vue (
    {
        el : '#app',
        data :{
            contattoAttivo :0,
            contatti : [
                {
                    name : 'Claudio',
                    avatar : '_1',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                    }
                    ],
                },
                {
                    name: 'Giulia',
                    avatar: '_2',
                },
                {
                    name: 'Porthos',
                    avatar: '_3',
                },
                {
                    name: 'Giada',
                    avatar: '_4',
                },
                {
                    name: 'Babbo',
                    avatar: '_5',
                },
                {
                    name: 'Shiro',
                    avatar: '_6',
                },
                {
                    name: 'Penny',
                    avatar: '_7',
                },
                {
                    name: 'Mamma',
                    avatar: '_8',
                },
            ]
        },
        methods:{
            setContattoAttivo(indice){
              this.contattoAttivo = indice;
              console.log(this.contattoAttivo);
 },
        }
    }
);



// quando si clicca su un contatto compaiono i messaggi. Creo una funzione con un ciclo sui messaggi, che si attiva con un click quando il contatto del ciclo lista contatti è uguale a quello dei messaggi