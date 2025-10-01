<script setup lang="ts">
import ContentLayout from '@/layouts/contentLayout.vue';
import {Card, cardLayout} from '@/components/common/Card';


</script>

<template>
    <ContentLayout>
        <div class="flex flex-col gap-4 items-center py-4">
            <h1 class="text-5xl font-bold">Portfolio Page</h1>
            <cardLayout>
                <Card title="Project 1" description="Description of Project 1" miniature="/testPic1.jpeg" picLoc="right"/>
                <Card title="Project 2" description="Description of Project 2" miniature="/herobg.jpg" picLoc="left"/>
                <Card title="Project 3" description="Description of Project 3" miniature="/testPic2.webp" picLoc="right"/>
                <Card title="Project 4" description="Description of Project 4" miniature="/herobg.jpg" />
            </cardLayout>
        </div>
    </ContentLayout>
</template>
