<script setup lang="ts">
import HeroTitle from '@/components/HeroTitle.vue';
import ContentLayout from '@/layouts/contentLayout.vue';

</script>

<template>
    <div class="w-full h-96 relative">
        <HeroTitle />   
        <ContentLayout>
            <div>
                Main Page Content
            </div>
        </ContentLayout>
    </div>
</template>
