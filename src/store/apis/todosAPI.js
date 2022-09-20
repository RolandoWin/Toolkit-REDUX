import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    //son las diferentes funciones
    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos'
        }),

        getTodoById: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        })

    })

})

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;