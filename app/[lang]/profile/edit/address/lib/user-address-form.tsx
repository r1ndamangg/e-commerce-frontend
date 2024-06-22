import { FC } from "react"
import {
  Button,
  Input,
  RadioGroup,
  RadioGroupItem,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui"

const UserAddressForm: FC = () => {
  return (
    <>
      <div className="mt-3 bg-white px-4 py-2">
        <form>
          <div className="mt-4 flex flex-col gap-2">
            <RadioGroup className="flex">
              <RadioGroupItem value="option-one" />
              <Label className="text-sm" htmlFor="option-one">
                Улица, дом, квартира
              </Label>
            </RadioGroup>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Label className="text-xs">Город*</Label>

            <Select>
              <SelectTrigger className="focus-visible:ring-ring:focus-visible">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Label className="text-xs">Улица *</Label>
            <Input type="text" placeholder="Введите название улицы" />
          </div>

          <div className="mt-4 flex gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Дом *</Label>
              <Input type="text" placeholder="Номер дома" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Квартира</Label>
              <Input type="text" placeholder="Номер квартиры" />
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Этаж</Label>
              <Input type="text" placeholder="Укажите этаж" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Код домофона</Label>
              <Input type="text" placeholder="Укажите код" />
            </div>
          </div>

          <div className="mt-4 flex w-full">
            <Button type="submit" className="ml-auto" variant="primary">
              Сохранить
            </Button>
          </div>
        </form>
      </div>
      <div className="mt-3 bg-white px-4 py-2">
        <form>
          <div className="mt-4 flex flex-col gap-2">
            <RadioGroup className="flex">
              <RadioGroupItem value="option-one" />
              <Label className="text-sm" htmlFor="option-one">
                Улица, дом, квартира
              </Label>
            </RadioGroup>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Label className="text-xs">Город*</Label>

            <Select>
              <SelectTrigger className="focus-visible:ring-ring:focus-visible">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Label className="text-xs">Улица *</Label>
            <Input type="text" placeholder="Введите название улицы" />
          </div>

          <div className="mt-4 flex gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Дом *</Label>
              <Input type="text" placeholder="Номер дома" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Квартира</Label>
              <Input type="text" placeholder="Номер квартиры" />
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Этаж</Label>
              <Input type="text" placeholder="Укажите этаж" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Код домофона</Label>
              <Input type="text" placeholder="Укажите код" />
            </div>
          </div>

          <div className="mt-4 flex w-full">
            <Button type="submit" className="ml-auto" variant="primary">
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UserAddressForm
