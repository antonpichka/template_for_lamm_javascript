- https://github.com/antonpichka/library_architecture_mvvm_modify/tree/main/package#architectural-objects
- https://github.com/antonpichka/library_architecture_mvvm_modify_javascript/blob/main/library_architecture_mvvm_modify_javascript/example/index.ts
- https://github.com/antonpichka/library_architecture_mvvm_modify/labels

---

- After setup. Everything after this message can be deleted. Even the message itself

## Project setup

- [api_template_for_lamm_javascript](https://github.com/antonpichka/template_for_lamm_javascript#api_template_for_lamm_javascript)
- [website_template_for_lamm_javascript](https://github.com/antonpichka/template_for_lamm_javascript#website_template_for_lamm_javascript)

### api_template_for_lamm_javascript

- If you need to change the application name from 'api_template_for_lamm_javascript' to 'api_${your_name}':
- - 'api_template_for_lamm_javascript/package.json':
- - - '"name": "api_template_for_lamm_javascript"'
- Change your project's dependency path in "api_template_for_lamm_javascript\public\src\named_test_main\q_test_main\package.json":
```
"api_template_for_lamm_javascript": "file:../../../.."
```
- - ""api_${your_name_project}"="file:../../../..""

### website_template_for_lamm_javascript

- If you need to change the application name from 'website_template_for_lamm_javascript' to 'website_${your_name}':
- - 'website_template_for_lamm_javascript/package.json':
- - - '"name": "website_template_for_lamm_javascript"'
- Change your project's dependency path in "website_template_for_lamm_javascript\public\src\named_test_main\q_test_main\package.json":
```
"website_template_for_lamm_javascript": "file:../../../.."
```
- - ""website_${your_name_project}"="file:../../../..""