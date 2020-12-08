<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <ScrollView>
        	<StackLayout>
        		<NSImg width="500"
                       height="500"
                       src="https://i.pravatar.cc/500"
                       placeholderImageUri="~/assets/placeholder-user.png"
                       roundedCornerRadius="60"
                ></NSImg>
        	</StackLayout>
        </ScrollView>
        
    </Page>
</template>

<script>
  export default {
    
  };
</script>

<style lang="scss">
    .floating-action-button {
    	color: red;
    }
</style>
