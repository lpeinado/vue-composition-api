export const vAutolog = {
    mounted: (el) => {
        el.addEventListener('input', (e) => {
            console.log(e.target.value);
        });
    }
};