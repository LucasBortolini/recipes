<section id="modal" class="d-none myModal-wrapper">
  <div class="myModal">

    {%- include whatsapp.md -%}
    {%- include telegram.md -%}
    {%- include e-mail.md -%}
    {%- include notification.md -%}
    {%- include phone.md -%}
    {%- include indicate.md -%}
    {%- include who-we-are.md -%}
    {%- include contact_us.md -%}
    {%- include cancel.md -%}
    {%- include report_bug.md -%}
    
  </div>
  <a class="close" onclick="hideModal()">
    <button type="button" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </a>
</section>