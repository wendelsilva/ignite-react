import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'unform'
;

const repository = {
    name: "unform",
    description: "Form in React",
    link: "https://github.com/wendelsilva"
}
export function RepositoryList() {
    return (
        <section>
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/> 
            </ul>
        </section>
    )
}