<template>
    <div class="home-pochette" >
        <v-field-label class="label-pochette">Playing now</v-field-label>
        <br/>
        <v-card-title class="justify-center"/>
        <br/>
        <v-col class="song">
            <v-label class="label-song">Bobby Mcferrin</v-label>
            <v-label class="label-song">Don’t Worry Be Happy</v-label>
        </v-col>
    </div>
</template>

<style>
.home-pochette {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
    padding-top: 5%;
}

.label-pochette {
    color: white;
    font-weight: bold;
}

.label-song {
    color: white;
}

.song {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5%;
    padding-top: 5%;
}

</style>