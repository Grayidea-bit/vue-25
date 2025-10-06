<script setup lang="ts">
import HeroTitle from '@/components/HeroTitle.vue';
import ContentLayout from '@/layouts/contentLayout.vue';

</script>

<template>
    <div class="w-full h-fit relative">
        <HeroTitle title="NO HESITATION." text-color="text-beige "/>   
        <ContentLayout>
            <div>
                Main Page Content
            </div>
        </ContentLayout>
    </div>
</template>
