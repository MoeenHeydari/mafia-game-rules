<template>

    <header-view id="top"></header-view>
    <main>
        <h2>GAME OVERVIEW:</h2>
        <p>
            The game models a conflict between two groups: an informed minority (the mafia or the werewolves), and an uninformed majority (the villagers). At the start of the game, each player is secretly assigned a role affiliated with one of these teams. The game has two alternating phases: first, a night role, during which those with night killing powers may covertly kill other players, and second, a day role, in which surviving players debate the identities of players and vote to eliminate a suspect. The game continues until a faction achieves its win condition; for the village, this usually means eliminating the evil minority, while for the minority this usually means reaching numerical parity with the village and eliminating any rival evil groups.
        </p>
        <h2>DISCUSSION & VOTING:</h2>
        <p>
            The discussion phase is when Town members chat about who they suspect of being an evil role. Once voting starts, a majority vote from the town will put someone on trial.
        </p>
        <h2>DEFENSE & JUDGEMENT:</h2>
        <p>
            If someone is accused, the defense phase is when they will plead their innocence to the town. Have a convincing story or find yourself facing the gallows! During judgement, the town votes on the fate of the accused. Players can vote guilty, innocent or abstain. If there are more guilty votes than innocent votes the defendant is sentenced to death by hanging!
        </p>
        <h2>NIGHT:</h2>
        <p>
            The night phase is when most roles use their abilities. Serial Killers stealthily murder people, Doctors heal people who are attacked, Sheriffs interrogate people for suspicious activity, the Witch or Coven Leader control the abilities of others, Escorts “distract” others from using their abilities, etc.
        </p>
    
    </main>
    <scroll-up></scroll-up>
    <footer-view></footer-view>
</template>

<script>


import HeaderView from '@/components/HeaderView.vue'
import ScrollUp from '@/components/ScrollUp.vue';
import FooterView from '@/components/FooterView.vue';

export default {
    name: 'GameDescription',
    components: {
        HeaderView,
        ScrollUp,
        FooterView
    }
}
</script>

<style scope>



</style>