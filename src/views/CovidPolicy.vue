<template>
  <BaseLayout>
    <template #left-side>
      <h1>Covid Policy</h1>
    </template>

    <template #right-side> </template>
  </BaseLayout>

  <PageChangeButtons
    previousPageName="are_you_vaccinated"
    :hideNextBtn="true"
  />
</template>
