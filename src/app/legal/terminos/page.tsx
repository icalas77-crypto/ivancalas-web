import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terminos y Condiciones | Ivan Calas',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-5xl font-bold">Terminos y Condiciones</h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Uso del Sitio Web</h2>
            <p className="text-gray-300">
              Al acceder y utilizar este sitio web, aceptas estos terminos y condiciones. Si no estas de acuerdo
              con alguna parte de ellos, no debes usar este sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Licencia de Uso</h2>
            <p className="text-gray-300">
              Se te concede una licencia limitada, no exclusiva y revocable para acceder y usar este sitio web
              solo para fines personales y no comerciales, siempre que no incumplas estas condiciones.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Contenido del Usuario</h2>
            <p className="text-gray-300">
              Cualquier contenido que transmitas a traves de formularios es responsabilidad tuya. Nos reservamos el
              derecho de rechazar, editar o eliminar contenido que infrinja estos terminos.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Limitacion de Responsabilidad</h2>
            <p className="text-gray-300">
              Este sitio web se proporciona &quot;tal cual&quot; sin garantias de ningun tipo. No nos hacemos
              responsables por danos indirectos, incidentales o consecuentes derivados del uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Cambios en los Terminos</h2>
            <p className="text-gray-300">
              Nos reservamos el derecho de modificar estos terminos en cualquier momento. Los cambios entran en
              vigor inmediatamente despues de su publicacion en el sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Ley Aplicable</h2>
            <p className="text-gray-300">
              Estos terminos se rigen por las leyes de Espana. Cualquier disputa se sometera a la jurisdiccion
              exclusiva de los tribunales espanoles.
            </p>
          </section>

          <p className="pt-8 text-sm text-gray-500">Ultima actualizacion: 2026</p>
        </div>
      </div>
    </div>
  );
}
