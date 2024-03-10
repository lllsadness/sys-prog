function delay(N) {
    return new Promise(resolve => {
        setTimeout(resolve, N * 1000);
    });
}

async function countDown(N) {
    for (let i = N; i >= 0; i--) {
        console.log(i);
        await delay(1);
    }
}

countDown(5); // Пример использования функции countDown

async function getFirstRepository(username) {
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        const reposUrl = userData.repos_url;
        const reposResponse = await fetch(reposUrl);
        const reposData = await reposResponse.json();
        if (reposData.length > 0) {
            return reposData[0].name;
        } else {
            return "У пользователя нет репозиториев";
        }
    } catch (error) {
        return "Произошла ошибка при получении данных";
    }
}

// Пример использования функции getFirstRepository
getFirstRepository('octocat')
    .then(repository => console.log(repository))
    .catch(error => console.error(error));
