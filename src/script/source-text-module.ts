import vm from 'vm'

export interface Linker {
  (specifier: string, referencingModule: SourceTextModule): Promise<SourceTextModule>
}

export interface SourceTextModule {
  new (code: string, options?: object): SourceTextModule
  dependencySpecifiers: string[]
  error: any
  evaluate(options?: object): Promise<{ result: any }>
  instantiate(): void
  link(linker: Linker): Promise<void>
  linkingStatus: 'unlinked' | 'linking' | 'linked' | 'errored'
  namespace: object
  status: 'uninstantiated' | 'instantiating' | 'instantiated' | 'evaluating' | 'evaluated' | 'errored'
  url: string
}

export const SourceTextModule = (vm as unknown as any).SourceTextModule as SourceTextModule
