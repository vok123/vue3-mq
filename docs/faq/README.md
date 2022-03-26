# Frequently Asked Questions

## Does this package support Vue 2?

No, and it never will. Vue3-Mq was based on the excellent [Vue-Mq](https://github.com/AlexandreBonaventure/vue-mq) project by [Alexandre Bonaventure](https://alexandrebonaventure.github.io/vue-mq), who's got your Vue 2 needs covered.

## Any plans for Typescript support?

I don't currently work with Typescript (it's on the to-do list, or maybe the to-do list is in Typescript). But if anyone feels compelled to add them, I'll happily accept a pull request on the project's [Github](https://github.com/craigrileyuk/vue3-mq) page.

## What can I use for my breakpoint keys?

Breakpoint keys must start with a letter and contain only alphanumeric characters and underscores `[a-zA-Z0-9_]`. No hyphens are allowed since these are used to denote breakpoint ranges.

## I'm getting a hydration warning on SSR...

It's a known issue when the provided `defaultBreakpoint` differs from the actual breakpoint on the client's device. At the moment, the only workaround is to wait until the app is mounted before initiating the changeover. However, this would result in a flash of alternate content and it only really does what Vue's internal engine handles automatically.

Awaiting a better solution, if one can be found.
