# Quick Action Button Control

![](https://github.com/novalogica/pcf-action-button/blob/main/screenshots/example.png)

## Usage

This is an example of the expected "Buttons JSON" property. In here you must specify the **key**, **translations**, **icon name** (`iconName`), **background color** (`bgColor`), and **text color** (`color`).

### Translations
You can now support multiple languages using the `translations` object. This accepts Key/Value pairs where the key is the **Locale ID (LCID)** (e.g., `1033` for English, `2070` for Portuguese) and the value is the label text.

Also, if needed, you can set a specific button to be disabled (`isDisabled`). If not specified, the buttons will be disabled only when the control is set to "Read-Only".

```json
[
   {
     "key": "newOpportunity",
     "translations": {
       "1033": "New Opportunity",
       "2070": "Nova Oportunidade"
     },
     "iconName": "Bullseye",
     "bgColor": "#7db700",
     "color": "#FFF",
     "isDisabled": false
   },
   {
     "key": "newContact",
     "translations": {
       "1033": "New Contact",
       "2070": "Novo Contacto"
     },
     "iconName": "AddFriend",
     "bgColor": "#1faaf0ff",
     "color": "#FFF",
     "isDisabled": false
   },
   {
     "key": "newCase",
     "translations": {
       "1033": "New Case",
       "2070": "Novo Caso"
     },
     "iconName": "CRMServices",
     "bgColor": "#f04e1f",
     "color": "#FFF",
     "isDisabled": false
   }
]
```

### Handling Clicks
When the button is clicked, the `key` is saved within the linked attribute. To handle the button click, add an `onChange` event on this field and execute logic based on the returned key value.

```javascript
function onQuickActionClicked(executionContext) {
    const formContext = executionContext.getFormContext();
    const buttonClicked = formContext.getAttribute("nl_quickactions")?.getValue();
    
    switch(buttonClicked) {
        case "newOpportunity":
            onCreateOpportunity(executionContext)
            break;
        case "newContact":
            onCreateContact(executionContext)
            break;
        case "newCase":
            onCreateCase(executionContext)
            break;
    }
}
```

## Icons
To find more icons, you can follow [https://developer.microsoft.com/en-us/fluentui#/controls/web/icon#usage](https://developer.microsoft.com/en-us/fluentui#/controls/web/icon#usage)

## Deploy
In order to deploy to your environment you'll need to run these commands:

### 1. Create your authentication profile using the pac auth create command
```bash
pac auth create --url [https://xyz.crm.dynamics.com](https://xyz.crm.dynamics.com) 
```

### 2. If you have previously created an authentication profile, you can view all the existing profiles using the pac auth list command
```bash
pac auth list
```

### 3. To switch between the previously created authentication profiles, use the pac auth select command:
```bash
pac auth select --index <index of the active profile>
```

### 4. Ensure that you have a valid connection and push the component
```bash
pac pcf push -pp <your publisher prefix>
```