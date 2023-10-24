import "./App.css";
// import { Greet } from './components/3-typing-props-greet';
// import { BasicPropsGreet } from "./components/4-basic-props";
// import { BasicPropsPerson } from "./components/4-basic-props-person";
// import { BasicPropsPersonList } from "./components/4-basic-props-person-list";
// import AdvancePropsStatus from "./components/5-advance-props-status";
// import AdvancePropsOscar from "./components/5-advance-props-oscar";
// import AdvancePropsHeading from "./components/5-advance-props-heading";
// import EventPropsButton from "./components/6-event-props-button";
// import EventPropsInput from "./components/6-event-props-input";
// import StyleProps from "./components/7-style-props";
// import LoggedIn from "./components/9-usestate";
// import FutureValueUser from "./components/10-usestate-future-value";
// import AssertionUser from "./components/11-usestate-type-assertion";
// import { UseReducerCounter } from "./components/12-usereducer-hook";
// import { UseReducerStrictActionCounter } from "./components/13-usereducer-strict-action-types";
// import { UseContextThemeContextProvider } from "./components/14-usecontext-hook-theme-context";
// import { UseContextBox } from "./components/14-usecontext-hook-box";
// import { UserContextFutureValueProvider } from "./components/15-usecontext-hook-future-value-user-context";
// import { UseContextFutureValueUser } from "./components/15-usecontext-hook-future-value-user";
// import { UseRefDomRef } from "./components/16-useref-domref";
// import { UseRefMutableRef } from "./components/16-useref-mutable-ref";
// import { ClassComponentCounter } from "./components/17-class-component-counter";
// import { ComponentPropsPrivate } from "./components/18-component-props-private";
// import { ComponentPropsProfile } from "./components/18-component-props-profile";
// import { GenericList } from "./components/19-generic-props-list";
// import { RestrictiongPropsRandomNumber } from "./components/20-restricting-props";
// import { TemplateLiteralsAndExcludeToast } from "./components/21-template-literals-and-exclude";
// import { WrappingCustomButton } from "./components/22-wrapping-html-elements-button";
// import { CustomComponent } from "./components/23-custom-components";
import { PolymorphicText } from "./components/24-polymorphic-components";

function App() {
  // 4
  // const personName = {
  //   first: 'Charvit',
  //   last: 'Zalavadiya'
  // }

  // 4
  // const personList = [
  //   {
  //     first: "Charvit",
  //     last: "Zalavadiya"
  //   },
  //   {
  //     first: "Kevin",
  //     last: "Barochiya"
  //   },
  //   {
  //     first: "Jenil",
  //     last: "Kakadiya"
  //   }
  // ]
  return (
    <div className="App">
      {/* <Greet name='CZ'/> */}
      {/* <BasicPropsGreet name="CZ" msg={14} isLoggedIn={false}/>
      <BasicPropsPerson name={personName}/>
      <BasicPropsPersonList name={personList}/> */}
      {/* <AdvancePropsStatus status="success" />
      <AdvancePropsHeading>Childern text</AdvancePropsHeading>
      <AdvancePropsOscar>
        <p>Oscar inside React.ReactNode</p>
    </AdvancePropsOscar> */}
      {/* <EventPropsButton handleClick={(event, id)=>{console.log("Button Clicked", event, id)}}/>
      <EventPropsInput value=" " handleInputChange={(event)=>console.log(event)}/> */}
      {/* <StyleProps style={{border: '2px solid white', padding: '30px', color: "hotpink"}}/> */}
      {/* <LoggedIn/> */}
      {/* <FutureValueUser/> */}
      {/* <AssertionUser/> */}
      {/* <UseReducerCounter/> */}
      {/* <UseReducerStrictActionCounter/> */}
      {/* <UseContextThemeContextProvider>
        <UseContextBox/>
      </UseContextThemeContextProvider> */}
      {/* <UserContextFutureValueProvider>
        <UseContextFutureValueUser/>
      </UserContextFutureValueProvider> */}
      {/* <UseRefDomRef/>
      <UseRefMutableRef/> */}
      {/* <ClassComponentCounter message="Hey !"/> */}
      {/* <ComponentPropsPrivate
        isLoggedIn={true}
        Component={ComponentPropsProfile}
      /> */}
      {/* 19 */}
      {/* <GenericList
        items={["Charvit", "Kevin", "Jenil"]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <GenericList items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <GenericList
        items={[
          {
            id: 1,
            first: "Charvit",
            last: "Zalavadiya",
          },
          {
            id: 2,
            first: "Kevin",
            last: "Barochiya",
          },
          {
            id: 3,
            first: "Jenil",
            last: "Kakadiya",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RestrictiongPropsRandomNumber value={10} isPositive/> */}
      {/* <TemplateLiteralsAndExcludeToast position="left-center"/> */}
      {/* <WrappingCustomButton variant="primary" onClick={()=> console.log("Clicked")}>
        Primary Button
      </WrappingCustomButton> */}
      {/* <CustomComponent name="CZ"/> */}
      <PolymorphicText as="h2" size="lg">
        H2
      </PolymorphicText>
      <PolymorphicText as="p" size="md">
        P
      </PolymorphicText>
      <PolymorphicText as="label" htmlFor="someId" size="lg">
        Label
      </PolymorphicText>
    </div>
  );
}

export default App;
