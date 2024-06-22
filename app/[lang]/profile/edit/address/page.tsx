import { FC } from "react"
import Header from "./lib/header"
import UserAddressForm from "./lib/user-address-form"

const AddressForm: FC = () => {
  return (
    <div>
      <Header title="Изминить адрес" />
      <UserAddressForm />
    </div>
  )
}

export default AddressForm
