<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import {
    TagsInputRoot,
    type TagsInputRootEmits,
    type TagsInputRootProps,
    useForwardPropsEmits,
} from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
    TagsInputRootProps & { class?: HTMLAttributes["class"] }
>();
const emits = defineEmits<TagsInputRootEmits>();

const delegatedProps = reactiveOmit(props, "class");

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <TagsInputRoot
        v-bind="forwarded"
        :class="
            cn(
                'border-input bg-background flex flex-wrap items-center gap-2 rounded-md border px-3 py-1.5 text-sm',
                props.class
            )
        "
    >
        <slot />
    </TagsInputRoot>
</template>
