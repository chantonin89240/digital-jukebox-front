<template>
    <p v-if=pending>Chargement...</p>
    <p v-else-if="error">{{ error }}</p>
    <v-list lines="two" v-else>
        <v-list-item 
            v-for="bill in billings"
            :key="bill.billingId"
            :title="bill.price + '€'"
            :subtitle="bill.dateBilling"
        ></v-list-item>
    </v-list>
</template>

<script lang="ts" scoped>

let URL = "https://localhost:7264/Billing"


export default { 
    data : () => ({
    }),
    setup : async () => {
        
        let {data, pending, error} = await useFetch<Array<ApiBilling>>(URL);
        
        var billings = data.value;
        
        if(billings){
            billings.forEach( (billing, index) => {
                // @ts-ignore :: 'billings' is detected as "possibly null" in line below, but not in line above.
                billings[index].dateBilling = DateFromAspString(billing.dateBilling).toDateString();
            });
        }
        
        return {billings, pending, error}
    }
}

function DateFromAspString(value : String) : Date {
    let [firstChunk, splitMe] = value.split('.');

    if(splitMe.includes('+'))   // "...+HH:MM"
    {
        var thirdChunk = splitMe.split('+')[1];
        thirdChunk = '+' + thirdChunk;
    }
    else{
        if(splitMe.includes('-'))   // "...-HH-MM"
        {
            var thirdChunk = splitMe.split('-')[1];
            thirdChunk = '-' + thirdChunk;
        }
        else                        // = UTC
            var thirdChunk = 'Z'
    }

    return new Date(Date.parse(firstChunk + thirdChunk));
}

interface ApiBilling {
	billingId: number,
    appUserId: number,
    barId: number,
    price: number,
    dateBilling: string
}
</script>


<style>

</style>