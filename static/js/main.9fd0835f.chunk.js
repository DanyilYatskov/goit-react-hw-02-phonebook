(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports={button:"contactListItem_button__1cYM6",text:"contactListItem_text__1_29q",item:"contactListItem_item__2kJ9R"}},,function(t,e,n){t.exports={label:"input_label__2xfp_",input:"input_input__iLajh"}},function(t,e,n){t.exports={section:"section_section__1QcHW",title:"section_title__zjeZM"}},function(t,e,n){t.exports={label:"filter_label__a9Q0L",input:"filter_input__2zkCU"}},,,function(t,e,n){t.exports={button:"button_button__1v7yO"}},function(t,e,n){t.exports={form:"form_form__2VZYe"}},function(t,e,n){t.exports={list:"contactList_list__2kt4_"}},function(t,e,n){t.exports={text:"notification_text__xs5LS"}},,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(2),i=n.n(r),s=n(18),o=n(3),u=n(4),l=n(6),b=n(5),m=n(28),d=n(12),p=(n(24),n(13)),j=n(9),h=n.n(j),f=n(1),x=function(t){var e=t.inputId,n=t.handleChange,a=t.inputName,c=t.value,r=t.pattern,i=t.title,s=t.type;return Object(f.jsxs)("label",{className:h.a.label,htmlFor:e,children:[a,Object(f.jsx)("input",{className:h.a.input,type:s,name:a,pattern:r,title:i,required:!0,value:c,id:e,onChange:n})]})},O=n(14),_=n.n(O),v=function(t){var e=t.name,n=t.type;return Object(f.jsx)("button",{className:_.a.button,type:n,children:e})},C=n(15),g=n.n(C),N=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:t.props.name,number:t.props.number},t.nameInputId=Object(m.a)(),t.numberInputId=Object(m.a)(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a.toLowerCase(),c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsxs)("form",{className:g.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsx)(x,{inputName:"Name",type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,inputId:this.nameInputId,handleChange:this.handleChange}),Object(f.jsx)(x,{inputName:"Number",type:"tel",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:n,inputId:this.numberInputId,handleChange:this.handleChange}),Object(f.jsx)(v,{name:"Add Contact",type:"Submit"})]})}}]),n}(a.Component);N.defaultProps={name:"",number:""};var y=N,I=n(10),S=n.n(I),k=function(t){var e=t.children,n=t.title;return Object(f.jsxs)("section",{className:S.a.section,children:[Object(f.jsx)("h2",{className:S.a.title,children:n}),e]})},A=n(7),L=n.n(A),w=function(t){var e=t.contactName,n=t.contactNumber,a=t.contactId,c=t.onDeleteHandler;return Object(f.jsxs)("li",{className:L.a.item,children:[Object(f.jsxs)("p",{className:L.a.text,children:[e," : ",n]}),Object(f.jsx)("button",{type:"button",className:L.a.button,onClick:function(){return c(a)},children:"Delete"})]})},F=n(16),z=n.n(F),D=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{className:z.a.list,children:e.map((function(t){return Object(f.jsx)(w,{contactName:t.name,contactNumber:t.number,contactId:t.id,onDeleteHandler:n},t.id)}))})},H=n(17),Z=n.n(H),J=function(t){var e=t.message;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("p",{className:Z.a.text,children:e})})},M=n(11),P=n.n(M),B=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{className:P.a.label,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n,className:P.a.input})]})},q=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:t.props.contacts,filter:""},t.onChangeFilter=function(e){t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a};if(void 0===t.state.contacts.find((function(t){return t.name===c.name})))t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(s.a)(e),[c])}}));else{d.b.error("".concat(c.name," is already in contacts"),{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getFilteredContacts();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(k,{title:"Phonebook",children:Object(f.jsx)(y,{onSubmit:this.addContact})}),e.length>0?Object(f.jsxs)(k,{title:"Contacts",children:[Object(f.jsx)(B,{value:n,onChange:this.onChangeFilter}),Object(f.jsx)(D,{contacts:a,onDeleteContact:this.deleteContact})]}):Object(f.jsx)(J,{message:"Contacts are missing"}),Object(f.jsx)(d.a,{})]})}}]),n}(a.Component);q.defaultProps={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]};var E=q;n(26);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.9fd0835f.chunk.js.map