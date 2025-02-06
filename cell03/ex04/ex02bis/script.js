$(document).ready(function() {
    $('#calculateBtn').click(function() {
        const leftInput = $('#leftInput').val();
        const rightInput = $('#rightInput').val();
        const operator = $('#operator').val();

        if (!/^\d+$/.test(leftInput) || !/^\d+$/.test(rightInput)) {
            alert('Error :');
            return;
        }

        const left = parseInt(leftInput, 10);
        const right = parseInt(rightInput, 10);

        if ((operator === '/' || operator === '%') && right === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        let result;
        switch (operator) {
            case '+': result = left + right; break;
            case '-': result = left - right; break;
            case '*': result = left * right; break;
            case '/': result = left / right; break;
            case '%': result = left % right; break;
            default: result = 'Invalid operator';
        }

        alert(`Result: ${result}`);
        console.log(`Result: ${result}`);
    });

    setInterval(() => {
        alert('Please, use me...');
    }, 30000);
});
