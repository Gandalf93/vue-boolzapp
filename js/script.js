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
                    text: 'Usciamo sta sera?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Voglio andare a mangiare un panino',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:00:22',
                    text: 'e un gelato',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Ci vediamo alle 8 sotto casa',
                    status: 'received'
                    }
                    ],
                },
                {
                    name: 'Giulia',
                    avatar: '_2',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Ricordati di comprare la farina e la mozzarella',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'E la coca cola',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Se sei ancora lì compra pure il gelato e le fragole thx',
                    status: 'received'
                    }
                    ],
                },
                {
                    name: 'Porthos',
                    avatar: '_3',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Ho fame',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Non ho ancora mangiato oggi',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'Vieni a mettermi da mangiare',
                    status: 'received'
                    }
                    ],
                },
                {
                    name: 'Giada',
                    avatar: '_4',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Non dare da mangiare a Porthos',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Ha già mangiato, è a dieta',
                    status: 'sent'
                    }
                
                    ],
                },
                {
                    name: 'Babbo',
                    avatar: '_5',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Porthos mi sta chiedendo di mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Gliene ho aggiunto',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'non ne ha bisogno, è in forma',
                    status: 'received'
                    }
                    ],
                },
                {
                    name: 'Shiro',
                    avatar: '_6',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'ti ho portato un regalo',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'è una cosa da mangiare',
                    status: 'sent'
                    },
                    
                   
                    ],
                },
                {
                    name: 'Penny',
                    avatar: '_7',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Ho fame',
                    status: 'sent'
                    },
                    
                    ],
                },
                {
                    name: 'Mamma',
                    avatar: '_8',
                    visible: true,
                    messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'sì, gli ho dato da mangiare',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'ne chiedeva, aveva fame poverino',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    text: 'perché? è magro',
                    status: 'received'
                    }
                    ],
                },
            ]
        },
        methods:{
            setContattoAttivo(indice){
              this.contattoAttivo = indice;
              
            },
        }
    }
);



// quando si clicca su un contatto compaiono i messaggi. Creo una funzione con un ciclo sui messaggi, che si attiva con un click quando il contatto del ciclo lista contatti è uguale a quello dei messaggi