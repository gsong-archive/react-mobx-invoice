# React/MobX Demo Project

My first learning project with React. I chose the [MobX][] state management to
try something other than the de-facto Redux pattern. The stores are observables
and the components are the observers. MobX builds a directed graph of
observables to all their observers, and takes care of handling the subscriptions
and publishing change events. It's very similar to what Angular 2 does with
RxJS.

## Let's Run It

1.  Clone this project.
2.  `npm install`
3.  `npm start`
4.  Visit <http://localhost:3333>

## App Description

The app is a simple invoice app. Each invoice goes through the following states:

`draft` → `sent` → `paid`

If an invoice is in the `sent` state, it can also become `overdue`.

## App Structure

The app is divided into four sections:

### API

This is the mock API client, which can be substituted with a real client if
there's a persistence backend.

### Stores

Application wide stores which encapsulate state and actions. These stores are
what's being observed throughout the app. There are three types of decorators
used throughout the stores:

#### `@observable`

Makes the value an observable which emits change events.

#### `@computed`

Calculated values or synthetic properties which typically depend on observable
values.

#### `@action`

Signifies a function or method that modifies an observable. While it's not
strictly necessary, see the [documentation][action-docs] for more info.

### Sections

These components represent major structural sections of the app, roughly mapping
to each route. These components are very state and context aware, so not
terribly re-usable.

They also delegate most of the rendering duties to presentation components.

### Components

Presentation components that rely on prop inputs to do their work. They are
unaware of their context and are instead handed the information they're suppose
to render and the actions they're supposed to perform.

These can potentially be abstracted out for re-use in other apps as well.


[MobX]: https://github.com/mobxjs/mobx
[action-docs]: https://mobxjs.github.io/mobx/refguide/action.html
[demo]: https://gsong.github.io/react-mobx-invoice
