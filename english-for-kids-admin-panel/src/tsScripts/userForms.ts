import { createBtn } from "./shared";

export function createFormField(type: string, placeholder: string, cls: string, fieldName: string) {
  const field: HTMLInputElement = document.createElement("input");
  field.setAttribute("class", cls);
  field.setAttribute("placeholder", placeholder);
  field.setAttribute("type", type);
  field.setAttribute("name", fieldName);

  return field;
}

const closeFormBtnIcon = `<?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="30px" height="30px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x31_0_23_">
		<g>
			<path d="M306,0C136.992,0,0,136.992,0,306s136.992,306,306,306c168.988,0,306-137.012,306-306S475.008,0,306,0z M414.19,387.147
				c7.478,7.478,7.478,19.584,0,27.043c-7.479,7.478-19.584,7.478-27.043,0l-81.032-81.033l-81.588,81.588
				c-7.535,7.516-19.737,7.516-27.253,0c-7.535-7.535-7.535-19.737,0-27.254l81.587-81.587l-81.033-81.033
				c-7.478-7.478-7.478-19.584,0-27.042c7.478-7.478,19.584-7.478,27.042,0l81.033,81.033l82.181-82.18
				c7.535-7.535,19.736-7.535,27.253,0c7.535,7.535,7.535,19.737,0,27.253l-82.181,82.181L414.19,387.147z"/>
		</g>
	</g>
</g>
</svg>`

export const createCloseFormBtn = () => {
  const closeFormBtn: HTMLDivElement = document.createElement("div");
  closeFormBtn.setAttribute("class", "closeFormBtn");
  closeFormBtn.innerHTML = closeFormBtnIcon;

  closeFormBtn.addEventListener("click", (e) => {
    // const form = e.target.parentNode();
    const formCont: HTMLDivElement = document.querySelector(".userFormBg");
    formCont.remove();
  })

  return closeFormBtn;
}

export const createCancelBtn = () => {
  const cancelBtn: HTMLInputElement = createBtn("cancelBtn submitFormBtn", "cancel");

  cancelBtn.addEventListener("click", () => {
    console.log("cancel click");
    const fields = document.querySelectorAll(".formField");
    fields.forEach(field => {
      (<HTMLInputElement>field).value = "";
    })
  })

  return cancelBtn;
}